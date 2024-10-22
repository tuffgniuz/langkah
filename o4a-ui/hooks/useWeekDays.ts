import { useEffect, useState } from "react";

const useWeekDays = () => {
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  useEffect(() => {
    const getWeekDays = () => {
      const currentDate = new Date();
      const dayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
      const monday = new Date(currentDate);
      monday.setDate(
        currentDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1),
      );

      const days: Date[] = Array.from({ length: 7 }, (_, i) => {
        const newDate = new Date(monday);
        newDate.setDate(monday.getDate() + i);
        return newDate;
      });

      setWeekDays(days);
    };
    getWeekDays();
  }, []);

  return weekDays;
};

export default useWeekDays;
