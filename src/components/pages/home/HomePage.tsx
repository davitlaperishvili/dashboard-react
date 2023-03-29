
import Card from '../../mainContent/card/Card';
import ChartElem from '../../elements/chart/ChartElem';
import InfoCard from '../../elements/infoCard/InfoCard';
import Todo from '../../todo/Todo';
import Ticket from '../../ticketsList/Ticket';

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};
export default function HomePage() {

  return (
    <>
      <div className="grids_wrap no_border gap-2">
          <Card classList="grid-3 border_all">
            <InfoCard title="Unresolved" value="60" />
          </Card>
          <Card classList="grid-3 border_all">
            <InfoCard title="Overdue" value="16" />
          </Card>
          <Card classList="grid-3 border_all">
            <InfoCard title="Open" value="43" />
          </Card>
          <Card classList="grid-3 border_all">
            <InfoCard title="On hold" value="64" />
          </Card>
        </div>
        <div className="grids_wrap">
          <Card classList="grid-6">
            <ChartElem  title="Example Chart" type="BarChart" data={data}/>
          </Card>
          <Card classList="grid-6">
            <ChartElem  title="Example Chart" type="AreaChart" data={data}/>
          </Card>
        </div>
        <div className="grids_wrap">
          <Card classList="grid-12">
            <ChartElem  title="Example Chart" type="AreaChart" data={data}/>
          </Card>
        </div>
        <div className="grids_wrap no_border gap-1">
          <Card classList="grid-6 border_all">
            <Ticket />
          </Card>
          <Card classList="grid-6 border_all">
            <Todo />
          </Card>
        </div>
    </>
  )
}
