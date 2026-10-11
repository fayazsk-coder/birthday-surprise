export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  isComplete: boolean;
  formattedDays: string;
  formattedHours: string;
  formattedMinutes: string;
  formattedSeconds: string;
}

/**
 * Calculates remaining time until the target date
 */
export const calculateTimeLeft = (targetDateStr: string): TimeLeft => {
  const target = new Date(targetDateStr).getTime();
  const now = new Date().getTime();
  const difference = target - now;

  if (isNaN(target) || difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalMilliseconds: 0,
      isComplete: true,
      formattedDays: '00',
      formattedHours: '00',
      formattedMinutes: '00',
      formattedSeconds: '00',
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds: difference,
    isComplete: false,
    formattedDays: pad(days),
    formattedHours: pad(hours),
    formattedMinutes: pad(minutes),
    formattedSeconds: pad(seconds),
  };
};

/**
 * Format date for friendly romantic display
 */
export const formatBirthdayDisplay = (targetDateStr: string): string => {
  try {
    const date = new Date(targetDateStr);
    return date.toLocaleDateString(undefined, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return targetDateStr;
  }
};
