import "./DashboardChart.css";

const DashboardChart = ({ details }) => {
  return (
    <section>
      <div className="columns">
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[0].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[0].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[0].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[0].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[0].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[1].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[1].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[1].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[1].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[1].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[2].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[2].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[2].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[2].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[2].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[3].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[3].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[3].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[3].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[3].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[4].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[4].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[4].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[4].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[4].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[5].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[5].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[5].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[5].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[5].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[6].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[6].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[6].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[6].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[6].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[7].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[7].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[7].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[7].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[7].dhw}</span>
          </div>
        </div>
        <div className="column-container">
          <div
            className="column-bar series-b"
            style={{ flexBasis: "50%" }}
          ></div>
          <div
            className="column-bar series-a"
            style={{ flexBasis: "50%" }}
          ></div>
        </div>
        <div className="chart__bin__details">
          <div>
            <span className="bin__property_name">
              Bin {`${details[8].bin_no}`}
            </span>
          </div>
          <div>
            <span className="bin__property_name">Capacity</span>
            <span className="bin__property_value">{details[8].capacity}</span>
          </div>
          <div>
            <span className="bin__property_name">Pro</span>
            <span className="bin__property_value">{details[8].pro}</span>
          </div>
          <div>
            <span className="bin__property_name">TW</span>
            <span className="bin__property_value">{details[8].tw}</span>
          </div>
          <div>
            <span className="bin__property_name">DHW</span>
            <span className="bin__property_value">{details[8].dhw}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DashboardChart;
