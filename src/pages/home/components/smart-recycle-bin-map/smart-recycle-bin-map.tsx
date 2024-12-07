import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SmartRecycleBinProps } from "./type";

import { useApiGetAllSmartRecycleBin } from "@api/http-request/requests/api-server/hooks/smart-recycle-bin/use-api-get-all-smart-recycle-bin";
import { setCurrentRecycleBinId } from "@pages/home/redux";
import { Text } from "@radix-ui/themes";
import { pushErrorNotification } from "@services/notification";
import { useAppDispatch } from "@store";
import { stringifyRequestError } from "@utilities";
import { useEffect } from "react";
import SmartTrashMarkerBgPng from "./images/smart-trash-marker-bg.png";
// import SmartTrashMarkerPng from "./images/smart-trash-marker.png";
// import NewSmartTrashMarkerPng from "./images/new-marker-map.png";
import LogoSmartTrashMarkerPng from "./images/logoDNxanhDemo.png";
import { ISmartRecycleBin, SmartRecycleBinStatus, WasteType } from "@api/http-request/requests/api-server/models/smart-recycle-bin";
import { PhysicalRecycleBinStatus } from "@api/http-request/requests/api-server/models/physical-recycle-bin";

export const SmartRecycleBinMap = ({ ...props }: SmartRecycleBinProps) => {
    const dispatch = useAppDispatch();

    // const { mutateAsync, data: smartRecycleBins } = useApiGetAllSmartRecycleBin();

    // useEffect(() => {
    //     mutateAsync()
    //         .then((smartRecycleBins) => {
    //             dispatch(setCurrentRecycleBinId(smartRecycleBins[0].id));
    //         })
    //         .catch((error) => {
    //             dispatch(
    //                 pushErrorNotification({
    //                     message: "Không thể lấy dữ liệu thùng rác thông minh",
    //                     description: stringifyRequestError(error),
    //                 })
    //             );
    //         });

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const smartRecycleBins: ISmartRecycleBin[] = [
        {
            id: "1",
            name: "Thùng rác thông minh 1",
            locationLatitude: 16.071192,
            locationLongitude: 108.220053,
            status: SmartRecycleBinStatus.HEALTHY,
            physicalRecycleBins: [
                {
                    id: "1",
                    status: PhysicalRecycleBinStatus.NORMAL,
                    wasteType: WasteType.RECYCLABLE,
                    currentVolume: 0,
                    maxVolume: 100,
                    smartRecycleBinId: "1",
                    embeddedSystemId: "1",
                },
                {
                    id: "2",
                    status: PhysicalRecycleBinStatus.NORMAL,
                    wasteType: WasteType.ORGANIC,
                    currentVolume: 0,
                    maxVolume: 100,
                    smartRecycleBinId: "1",
                    embeddedSystemId: "1",
                },
                {
                    id: "3",
                    status: PhysicalRecycleBinStatus.NORMAL,
                    wasteType: WasteType.NON_RECYCLABLE,
                    currentVolume: 0,
                    maxVolume: 100,
                    smartRecycleBinId: "1",
                    embeddedSystemId: "1",
                },
            ],
        },
    ];

    return (
        <MapContainer center={[16.071192, 108.220053]} zoom={16} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {smartRecycleBins &&
                smartRecycleBins.map((smartRecycleBin) => (
                    <Marker
                        key={smartRecycleBin.id}
                        position={[smartRecycleBin.locationLatitude, smartRecycleBin.locationLongitude]}
                        icon={
                            new Icon({
                                iconUrl: LogoSmartTrashMarkerPng,
                                shadowUrl: SmartTrashMarkerBgPng,
                                iconSize: [40, 40],
                                shadowSize: [72, 72],
                            })
                        }
                    >
                        <Popup>
                            <Text weight="bold">{smartRecycleBin.name}</Text>
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    );
};
