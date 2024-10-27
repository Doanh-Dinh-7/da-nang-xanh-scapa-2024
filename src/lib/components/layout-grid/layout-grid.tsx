import { Box, Grid } from "@radix-ui/themes";
import { getResponsiveClassNames } from "@radix-ui/themes/dist/cjs/helpers";
import { MAX_LAYOUT_GRID_COLUMNS } from "./constants";
import { LayoutGridItemProps, LayoutGridProps } from "./type";
import cls from "classnames";

import "./style.scss";

export const LayoutGrid = ({ columns = MAX_LAYOUT_GRID_COLUMNS, children, ...props }: LayoutGridProps) => {
    return (
        <Grid columns={columns} {...props}>
            {children}
        </Grid>
    );
};

LayoutGrid.Item = ({ span = "1", className, children, ...props }: LayoutGridItemProps) => {
    return (
        <Box
            className={cls(
                "cs-lgi",
                getResponsiveClassNames({
                    className: "cs-lgi-span",
                    propValues: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                    value: span,
                }),
                className
            )}
            {...props}
        >
            {children}
        </Box>
    );
};
