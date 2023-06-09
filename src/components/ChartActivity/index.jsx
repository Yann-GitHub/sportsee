import PropTypes from "prop-types"
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"

/**
 * The daily activity session object.
 *
 * @typedef {Object} Session
 * @property {string} day - The session date in 'YYYY-MM-DD' format.
 * @property {number} kilogram - The weight (in kilograms) recorded during the session.
 * @property {number} calories - The number of calories burned during the session.
 * @property {number} dayNumber - The day number corresponding to the session.
 */

/**
 * Component that displays a daily activity chart (weight and calories).
 *
 * @param {Object} props - The props object.
 * @param {Session[]} props.sessions - An array of objects representing daily activity sessions.
 * @returns {JSX.Element} - React component - Daily activity chart.
 */

function ChartActivity({ sessions }) {
  // console.log(sessions)

  return (
    <div className="chartActivity">
      <h2 className="chartActivity__title">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessions}
          barGap={8}
          barSize="10%"
          margin={{
            top: 22,
            right: 15,
            left: 0,
            bottom: 22,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            axisLine={true}
            stroke="#DEDEDE"
            dataKey="dayNumber"
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            tickSize={16}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            orientation="right"
            dataKey="kilogram"
            tick={{ fill: "#9B9EAC", fontSize: 14, fontWeight: 500 }}
            tickLine={false}
            domain={["dataMin - 10", "dataMax + 10"]}
            yAxisId={1}
          />
          <YAxis
            hide={true}
            dataKey="calories"
            yAxisId={2}
            domain={["dataMin - 15", "dataMax + 15"]}
          />
          <Tooltip
            itemStyle={{
              color: "white",
              fontSize: 9,
              fontWeight: 500,
            }}
            cursor={{
              fill: "rgba(196, 196, 196, 0.5)",
            }}
            labelStyle={{ display: "none" }}
            wrapperStyle={{ outlineStyle: "none" }}
            formatter={(value, name, unit) => [value, unit]}
            contentStyle={{
              backgroundColor: "#E60000",
            }}
          />
          <Legend
            height={70}
            verticalAlign="top"
            align="right"
            iconSize={9}
            iconType={"circle"}
            formatter={(value) => (
              <span className="chartActivity__legend">{value}</span>
            )}
            className="chartActivity__legend"
          />
          <Bar
            name="Poids (kg)"
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            yAxisId={1}
            unit=" kg"
          />
          <Bar
            name="Calories brûlées (kCal)"
            dataKey="calories"
            barSize={7}
            fill="#FF0101"
            radius={[3, 3, 0, 0]}
            yAxisId={2}
            unit=" Kcal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

ChartActivity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
      dayNumber: PropTypes.number,
    })
  ).isRequired,
}

export default ChartActivity
