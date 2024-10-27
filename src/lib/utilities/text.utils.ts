// Generate random image url
export function randomImgUrl({ width = 1000, height = 1000, seed }: { width?: number; height?: number; seed?: number } = {}): string {
	seed = seed || Math.floor(Math.random() * 1000);
	return `https://picsum.photos/${width}/${height}?random=${seed}`;
}
