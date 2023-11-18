import { Line } from "react-chartjs-2";
import { registerables, Chart } from "chart.js";
import * as S from "./style";
Chart.register(...registerables);

function Dashboard() {
  return (
    <S.DashboardWrapper>
      <S.Heading>Sản phẩm đã bán được trong 12 tháng</S.Heading>
      <S.Dashboard>
        <Line
          datasetIdKey="id"
          data={{
            labels: [
              "Tháng 1 ",
              "Tháng 2",
              "Tháng 3 ",
              "Tháng 4",
              "Tháng 5",
              "Tháng 6",
              "Tháng 7",
              "Tháng 8",
              "Tháng 9",
              "tháng 10",
              "Tháng 11",
              "Tháng 12",
            ],
            datasets: [
              {
                id: 1,
                label: "OMEGA",
                data: [
                  1300, 450, 400, 450, 1600, 750, 980, 650, 900, 860, 590, 1030,
                ],
              },
              {
                id: 2,
                label: "ROLEX",
                data: [
                  300, 750, 800, 940, 1542, 950, 980, 750, 1251, 1520, 720, 910,
                ],
              },
              {
                id: 3,
                label: "TISSOT",
                data: [
                  900, 450, 1240, 1359, 1000, 550, 480, 1523, 750, 460, 420,
                  1552,
                ],
              },
              {
                id: 4,
                label: "BREITLING",
                data: [
                  412, 612, 612, 672, 723, 812, 624, 552, 752, 425, 641, 1250,
                ],
              },
              {
                id: 5,
                label: "TUDOR",
                data: [
                  512, 421, 525, 512, 612, 751, 812, 901, 612, 712, 800, 1300,
                ],
              },
              {
                id: 6,
                label: "LOGINES",
                data: [
                  450, 1023, 1125, 1421, 1521, 1541, 1253, 1123, 1012, 1012,
                  800, 900,
                ],
              },
            ],
          }}
        />
      </S.Dashboard>
    </S.DashboardWrapper>
  );
}

export default Dashboard;
