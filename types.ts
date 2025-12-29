
export interface MetricData {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface SlideProps {
  isActive: boolean;
  onRestart?: () => void;
}
