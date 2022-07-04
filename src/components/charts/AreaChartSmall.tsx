import { useTheme } from "@mui/system";
import ReactApexChart from "react-apexcharts";

interface IAreaChartSmallProps {
  color: string;
}
const AreaChartSmall = ({ color }: IAreaChartSmallProps) => {
  const theme = useTheme();
  const state = {
    options: {
      chart: {
        id: "area-chart-mini",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },

      tooltip: {
        enabled: true,
        style: {
          fontSize: "12px",
          fontFamily: "Public Sans",
        },
        x: {
          show: false,
        },
        y: {
          formatter: (val: number) => {
            return `$${val}`;
          },
          title: {
            formatter: (name: string) => "",
          },
        },
        marker: {
          show: false,
        },
      },
      axisTicks: {
        show: false,
      },
      stroke: {
        colors: [theme.palette.chart.area.stroke[color]],
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      colors: [theme.palette.chart.area.fill[color]],
    },
    series: [
      {
        name: "series1",
        data: [111, 136, 112, 189, 160, 170, 98],
      },
    ],
  };
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={120}
      />
    </div>
  );
};

AreaChartSmall.defaultProps = {
  color: "green",
};
export default AreaChartSmall;
