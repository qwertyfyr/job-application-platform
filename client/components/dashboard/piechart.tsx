import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
export default function DashboardCharts() {
  const chartData = [
    { name: "awaitingResponse", value: 14, fill: "#ffff00" },
    { name: "rejected", value: 5, fill: "#ff0000" },
    { name: "offers", value: 0, fill: "#00ff00" },
  ];

  const config = {
    awaitingResponse: {
      label: "Awaiting Response",
    },
    rejected: {
      label: "Rejected",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={config} className="aspect-square size-75">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie data={chartData} dataKey="value" nameKey="name" />
      </PieChart>
    </ChartContainer>
  );
}
