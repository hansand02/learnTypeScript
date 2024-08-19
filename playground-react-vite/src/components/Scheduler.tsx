import React, { useRef, useState } from "react";
import useViewPort from "../lib/useViewPort";
import moment from "moment";
import { Card, Col, Row, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export type ScheduleItem = {
  date: moment.Moment;
  index: number;
};

type SchedulerProps = {
  selectedDates: ScheduleItem[];
  onUpdateSchedule: (currentState: any) => any;
  renderWeekends?: boolean;
};

/* Callback, data, initialSlots? */
const gridHeaderStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  //backgroundColor: '#155cff90',
  borderBottom: "1px solid #ddd",
  fontWeight: "bold",
  padding: "8px",
  boxShadow: "0 0 0px rgba(255, 0, 0, 0.3)",
};

const gridStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  color: "#155cff",
  userSelect: "none", // Disable text selection
};

const selectedGridStyle: React.CSSProperties = {
  ...gridStyle,
  backgroundColor: "#155cff60", // the same coulor as the text, but more gjennomsiktig
  boxShadow: "0 0 0px rgba(255, 0, 0, 0.3)", // This box shadow kind of makes it seem like successives slots are linked together
};

const disabledGridStyle: React.CSSProperties = {
  ...gridStyle,
  backgroundColor: "#f5f5f5",
  color: "#bdbdbd",
  cursor: "not-allowed",
  boxShadow: "0 0 0px rgba(255, 0, 0, 0.3)",
};

const Scheduler: React.FC<SchedulerProps> = ({
  selectedDates,
  onUpdateSchedule,
  renderWeekends = true,
}) => {
  /**
   * Configuration parameters for time slots and opening hours.
   * Modify these values to customize the behavior of the component.
   */

  const isMobile = useViewPort();

  const hourSlotLength = 2; // Change this to modify the length of each time slot in hours
  const timeSlotStart = 7; // Change this to modify the starting hour of the time slots
  const timeSlotEnd = 18; // Change this to modify the ending hour of the time slots
  const helper_StartDaysFromNow = 0; // Used to set the initial state, change this to modify which day is the starting day of the calendar.
  const disabledDays = ["sat", "sun"]; //
  const disabledHours = [18];
  const dateFormat = "ddd-DD";
  const daysInCalendar = isMobile ? 3 : 5;

  // Remember that columnSpan and number of colums are inverse of one another

  const counterRef = useRef(0);

  const incrementCounter = () => {
    counterRef.current += 1;
  };

  const [firstDayVisually, setFirstDayVisually] = useState<number>(
    helper_StartDaysFromNow
  ); // Track the specified start date
  const calculateColumnSpan = (numberOfDays: number): number => {
    const totalColumns = 24;
    return Math.floor(totalColumns / numberOfDays);
  };

  const hourDifference = timeSlotEnd - timeSlotStart;
  const numberOfTimeSlots = Math.ceil(hourDifference / hourSlotLength);
  const dataRange = moment();
  const columnSpan = calculateColumnSpan(daysInCalendar);

  /* Also inclue Date as param */
  const handleSlotClick = (index: number) => {
    onUpdateSchedule((prevSlots: any) => {
      if (prevSlots.some((slot: any) => slot.index === index)) {
        return prevSlots.filter((slot: any) => slot.index !== index);
      }

      const newSlot: ScheduleItem = {
        date: createDateFromIndex(index),
        index: index,
      };
      return [...prevSlots, newSlot];
    });
  };

  // This function will give each cell in a grid an id, on the form:
  //
  //  0   3   6
  //  1   4   7
  //  2   5   8
  const getCellNumber = (col: number, row: number) => {
    return col * numberOfTimeSlots + firstDayVisually * numberOfTimeSlots + row;
  };

  const createDateFromIndex = (index: number) => {
    const col = Math.floor(index / numberOfTimeSlots);
    const row = index % numberOfTimeSlots;
    const date = moment()
      .add(col, "day")
      .startOf("day")
      .add(timeSlotStart + row * hourSlotLength, "hours");
    return date;
  };

  const incrementStartDateFromNow = () => {
    setFirstDayVisually((prevStartDate) => prevStartDate + daysInCalendar);
    console.log(columnSpan);
  };

  const decrementStartDateFromNow = () => {
    if (firstDayVisually >= daysInCalendar) {
      setFirstDayVisually((prevStartDate) => prevStartDate - daysInCalendar);
    }
  };

  return (
    <div>
      <Card>
        <Row justify="end" align="middle">
          <Button
            type="primary"
            icon={<LeftOutlined />}
            size="small"
            style={{ marginRight: "5px" }}
            onClick={decrementStartDateFromNow}
          />
          <Button
            type="primary"
            icon={<RightOutlined />}
            size="small"
            onClick={incrementStartDateFromNow}
          />
        </Row>

        <Row>
          {Array.from({ length: daysInCalendar }, (_, col) => {
            dataRange.add(col === 0 ? firstDayVisually : 1, "day");
            const isDisabledDay = disabledDays.includes(
              dataRange.format("ddd").toLowerCase()
            );

            if (isDisabledDay && !renderWeekends) {
              return undefined;
            }

            const counterRef = useRef(0);

            const incrementCounter = () => {
              counterRef.current += 1;
            };

            incrementCounter();

            return (
              <Col span={columnSpan}>
                <Card.Grid style={gridHeaderStyle} hoverable={false}>
                  {/* This ternary operator is here because the first day is "0" */}
                  {dataRange.format(dateFormat)}
                </Card.Grid>

                {Array.from({ length: numberOfTimeSlots }, (_, row) => {
                  const cellNumber = getCellNumber(col, row);

                  const isClickable =
                    disabledHours.some(
                      (disabledHour: number) =>
                        disabledHour >= timeSlotStart + row * hourSlotLength &&
                        disabledHour < timeSlotStart + row * hourSlotLength + hourSlotLength
                    ) ||
                    disabledDays.includes(
                      dataRange.format("ddd").toLowerCase()
                    );
                  return (
                    <Card.Grid
                      style={
                        selectedDates.some(
                          (slot: ScheduleItem) => slot.index === cellNumber
                        )
                          ? selectedGridStyle // The style when the cell is selected
                          : isDisabledDay
                          ? disabledGridStyle // Style when the date one of the disabled days
                          : isClickable // Default style
                          ? disabledGridStyle
                          : gridStyle
                      }
                      onClick={
                        !isClickable
                          ? () => handleSlotClick(cellNumber)
                          : undefined
                      } // Ternary expression to not allow onClick of disabled days
                      hoverable={!isClickable}
                      key={cellNumber}
                    >
                      {/* Change here to change the title on CardGrid */}
                      {!isClickable
                        ? timeSlotStart + row * hourSlotLength + ":00"
                        : "N/A"}
                    </Card.Grid>
                  );
                })}
              </Col>
            );
          })}
        </Row>
      </Card>
    </div>
  );
};

export default Scheduler;
