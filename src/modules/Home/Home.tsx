import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import img from "../../assets/img/Mask Group.png";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { TbWaveSawTool } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { PiBellSimpleRinging } from "react-icons/pi";
import "./styles.scss";

interface ProgressData {
  channel: string;
  traffic: number;
  value: string;
  color: string;
}

export const Home: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Wave Data",
        data: [65, 59, 80, 81, 56, 65, 70],
        fill: false,
        borderColor: "#563BFF",
        borderWidth: 5,
        tension: 0.4,
        pointStyle: "circle",
        pointRadius: [0, 0, 0, 10, 0, 0, 0],
        pointBorderWidth: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  const size: number = 72;
  const strokeWidth: number = 10;
  const circleOneStroke: string = "#F7F8FB";
  const circleTwoStroke: string = "#563BFF";
  const circleOneStroke2: string = "#FF7049";
  const green: string = "#20C997";
  const users: string = "users";
  const goals: string = "GOALS";
  const [offset1, setOffset1] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [offset2, setOffset2] = useState<number>(0);
  const [offset3, setOffset3] = useState<number>(0);
  const circleRef = useRef<SVGCircleElement>(null);

  const center: number = size / 2;
  const radius: number = size / 2 - strokeWidth / 2;

  const sizes: number = 184;

  const strokeWidth1: number = 20;
  const strokeWidth2: number = 80;
  const strokeWidth3: number = 150;
  const center1: number = sizes / 2;
  const center2: number = sizes / 2;
  const center3: number = sizes / 2;
  const radius1: number = center1 - strokeWidth1 / 2;
  const radius2: number = center2 - strokeWidth2 / 2;
  const radius3: number = center3 - strokeWidth3 / 2;

  const progress: number = 75;
  const progress1: number = 100;
  const progress2: number = 30;
  const progress3: number = 30;
  const circumference2: number = 2 * Math.PI * radius;
  const circumference: number = 2 * Math.PI * radius;
  const circumference3: number = 2 * Math.PI * radius3;
  useEffect(() => {
    const progressOffset: number = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    const progressOffset1: number = ((100 - progress1) / 100) * circumference;
    setOffset1(progressOffset1);

    if (circleRef.current) {
      circleRef.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
    }

    const progressOffset2: number = ((100 - progress2) / 100) * circumference2;
    setOffset2(progressOffset2);

    const progressOffset3: number = ((100 - progress3) / 100) * circumference3;
    setOffset3(progressOffset3);

    if (circleRef.current) {
      circleRef.current.style.transition =
        "stroke-dashoffset 850ms ease-in-out";
    }
  }, [
    progress,
    circumference,
    progress2,
    circumference2,
    progress3,
    circumference3,
  ]);

  const progressData: ProgressData[] = [
    { channel: "Direct", traffic: 60, value: "60%", color: "#563BFF" },
    { channel: "Referral", traffic: 45, value: "35%", color: "#FF7049" },
    { channel: "Organic", traffic: 75, value: "25%", color: "#20C997" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__box">
        <div className="dashboard__inp-box">
          <HiOutlineSearch className="dashboard__inp-search" />
          <input
            className="dashboard__inp"
            type="search"
            placeholder="search anything"
          />
        </div>
        <div className="dashboard__box-right">
          <span className="dashboard__icon">
            <MdOutlineMailOutline />
          </span>
          <span className="dashboard__icon">
            <PiBellSimpleRinging />
          </span>
          <img src={img} alt="" width={24} height={24} />
        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__main-left">
          <div className="dashboard__title-box">
            <h2 className="dashboard__title">Performance</h2>
            <span className="dashboard__title-text">Year</span>
          </div>
          <div className="dashboard__chart">
            <div className="dashboard__chart-box">
              <p className="dashboard__chart-point"></p>
              <p className="dashboard__chart-text">current period</p>
            </div>
            <div className="dashboard__chart-container">
              <Line data={data} options={options} />
            </div>
          </div>
          <ul className="dashboard__ul">
            <li className="dashboard__list">
              <div className="dashboard__list-box">
                <MdOutlinePeopleAlt />
              </div>
              <h3 className="dashboard__list-title">Users</h3>
              <span className="dashboard__list-count">72.6k</span>
              <p className="dashboard__list-text">+25%</p>
            </li>

            <li className="dashboard__list">
              <div className="dashboard__list-box2">
                <MdOutlinePeopleAlt />
              </div>
              <h3 className="dashboard__list-title">Sessions</h3>
              <span className="dashboard__list-count">87.2k </span>
              <p className="dashboard__list-text">+47%</p>
            </li>

            <li className="dashboard__list">
              <div className="dashboard__list-box3">
                <TbWaveSawTool />
              </div>
              <h3 className="dashboard__list-title">Bounce Rate</h3>
              <span className="dashboard__list-count">26.3%</span>
              <p className="dashboard__list-text">-28%</p>
            </li>

            <li className="dashboard__list">
              <div className="dashboard__list-box4">
                <PiClockCounterClockwiseBold />
              </div>
              <h3 className="dashboard__list-title">Session Duration</h3>
              <span className="dashboard__list-count">2m 18s</span>
              <p className="dashboard__list-text">+13%</p>
            </li>
          </ul>
          <div className="dashboard__btn-box">
            <h2 className="dashboard__subname">Daily Overview</h2>
            <button className="dashboard__btn">export</button>
          </div>

          <div className="dashboard__users">
            <div className="dashboard__circle">
              <div className="dashboard__users-box">
                <span>5,461 </span>
                <p>Today</p>
              </div>
              <svg className="svg" width={size} height={size}>
                <circle
                  className="svg-circle-bg"
                  stroke={circleOneStroke}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                <circle
                  className="svg-circle"
                  ref={circleRef}
                  stroke={circleTwoStroke}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
                <text
                  x={`${center}`}
                  y={`${center}`}
                  className="svg-circle-text"
                >
                  {users}
                </text>
              </svg>
              <div className="dashboard__users-box">
                <span>8,085 </span>
                <p>Expected</p>
              </div>
            </div>

            <div className="dashboard__circle">
              <div className="dashboard__users-box">
                <span>5,461 </span>
                <p>Today</p>
              </div>
              <svg className="svg" width={size} height={size}>
                <circle
                  className="svg-circle-bg"
                  stroke={circleOneStroke}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                <circle
                  className="svg-circle"
                  ref={circleRef}
                  stroke={circleOneStroke2}
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />

                <text
                  x={`${center}`}
                  y={`${center}`}
                  className="svg-circle-text2"
                >
                  {goals}
                </text>
              </svg>
              <div className="dashboard__users-box">
                <span>8,085 </span>
                <p>Expected</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard__main-right">
          <div className="dashboard__title-box">
            <h2 className="dashboard__title">Sessions By Device</h2>
            <span className="dashboard__title-text">Year</span>
          </div>
          <div className="dashboard__circle-container">
            <svg className="dashboard__circle-svg" width={sizes} height={sizes}>
              <circle
                className="svg-circle-bg"
                stroke={circleOneStroke}
                cx={center1}
                cy={center1}
                r={radius1}
                strokeWidth={strokeWidth}
              />
              <circle
                className="svg-circle-bg"
                stroke={circleTwoStroke}
                cx={center1}
                cy={center1}
                r={radius1}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset1}
              />
              <circle
                className="svg-circle-bg"
                stroke={circleOneStroke}
                cx={center2}
                cy={center2}
                r={radius2}
                strokeWidth={strokeWidth}
              />
              <circle
                className="svg-circle-bg"
                stroke={circleOneStroke2}
                cx={center2}
                cy={center2}
                r={radius2}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference2}
                strokeDashoffset={offset2}
              />

              <circle
                className="svg-circle-bg"
                ref={circleRef}
                stroke={circleOneStroke}
                cx={center3}
                cy={center3}
                r={radius3}
                strokeWidth={strokeWidth}
              />
              <circle
                className="svg-circle-bg"
                stroke={green}
                cx={center3}
                cy={center3}
                r={radius3}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference3}
                strokeDashoffset={offset3}
              />
            </svg>
            <div className="dashboard__circle-wrapper">
              <div className="dashboard__wrapper-box">
                <h3 className="dashboard__wrapper-title">Desktop </h3>
                <span className="dashboard__wrapper-spn">
                  8,085 <p className="dashboard__wrapper-text">13%</p>
                </span>
              </div>
              <div className="dashboard__wrapper-box">
                <h3 className="dashboard__wrapper-title">Mobile </h3>
                <span className="dashboard__wrapper-spn">
                  8,085 <p className="dashboard__wrapper-text">30%</p>
                </span>
              </div>
              <div className="dashboard__wrapper-box">
                <h3 className="dashboard__wrapper-title">Tablets </h3>
                <span className="dashboard__wrapper-spn">
                  8,085 <p className="dashboard__wrapper-text">25%</p>
                </span>
              </div>
            </div>
          </div>
          <div className="dashboard__proggresbar">
            <h2 className="dashboard__proggresbar-title">Sessions By Device</h2>
            <div className="dashboard__proggresbar-flex">
              <h3 className="dashboard__proggresbar-text">Channel</h3>
              <span className="dashboard__proggresbar-spn">Traffic (%)</span>
              <p className="dashboard__proggresbar-value">Value</p>
            </div>
            {progressData.map((data, index) => (
              <div key={index} className="dashboard__proggresbar-item">
                <span className="dashboard__proggresbar-channel">
                  {data.channel}
                </span>
                <div className="dashboard__proggresbar-bar">
                  <div
                    className="dashboard__proggresbar-progress"
                    style={{
                      width: `${data.traffic}%`,
                      backgroundColor: data.color,
                    }}
                  ></div>
                </div>
                <span className="dashboard__proggresbar-value">
                  {data.value}
                </span>
              </div>
            ))}
          </div>

          <div className="dashboard__footer">
            <div>
              <h3 className="dashboard__footer-title">Sessions By Device</h3>
              <span className="dashboard__footer-text">
                Top Region & session
              </span>
            </div>
            <button className="dashboard__footer-btn">view</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
