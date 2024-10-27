import { Flex } from "@radix-ui/themes";
import { ChartProps } from "./type";
import ChartDemo from "./images/Chart.png";
import style from "./style.module.scss";

export const Chart = ({ tabIndex, ...props }: ChartProps) => {
    return (
        <Flex justify="center" align="center" style={{ margin: "0 auto", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <img alt="chart" src={tabIndex === 1 ? ChartDemo : tabIndex === 2 ? ChartDemo : ChartDemo} />
        </Flex>
    );
};
