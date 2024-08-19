import "../index.css";
import Scheduler, { ScheduleItem } from "../components/Scheduler";
import { useState } from "react";
import GeneralLayout from "../layout/layout";

const SchedulerScreen = () => {
  const [slots, setSlots] = useState<ScheduleItem[]>([]);

  return (
    <>
      <GeneralLayout>
        <Scheduler
          selectedDates={slots}
          onUpdateSchedule={setSlots}
        ></Scheduler>
      </GeneralLayout>
    </>
  );
};

export default SchedulerScreen;
