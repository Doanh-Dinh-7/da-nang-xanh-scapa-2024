import { Skeleton } from "@components/skeleton";
import { Box } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import ImageNotFoundImg from "./images/image-not-found.jpg";
import { ImageProps } from "./type";
import { useResponsive } from "@services/responsive";

export const Image = ({ src, alt, width = "100%", height = "100%", objectFit = "cover", style, ...props }: ImageProps) => {
	const imageRef = useRef<HTMLImageElement>(null);

	const widthResponsive = useResponsive(width);
	const heightResponsive = useResponsive(height);

	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [retryCount, setRetryCount] = useState<number>(0);

	const handleImageLoaded = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		const image = event.currentTarget;
		if (image.complete) setIsLoaded(true);
	};

	const handleImageLoadFailed = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		const image = event.currentTarget;
		image.src = ImageNotFoundImg;

		if (retryCount < 3) setRetryCount(retryCount + 1);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const image = imageRef.current!;
			image.src = src;
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [retryCount, src]);

	return (
		<>
			<Box asChild display={isLoaded ? undefined : "none"} style={{ width: widthResponsive, height: heightResponsive, objectFit, ...style }} {...props}>
				<img ref={imageRef} data-src={src} src={src} alt={alt} onLoad={handleImageLoaded} onError={handleImageLoadFailed} />
			</Box>
			{!isLoaded && <Skeleton style={{ width: widthResponsive, height: heightResponsive, ...style }} {...props} />}
		</>
	);
};
