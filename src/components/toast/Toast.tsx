import { useEffect } from "react";

interface ToastProps {
  message: string;
  icon?: string;
  onClose: () => void;
}

const Toast = ({ message, icon, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="status"
      className="fixed bottom-10 left-1/2 z-20 flex w-max max-w-[calc(100%-32px)] -translate-x-1/2 items-center gap-2 rounded-xl bg-dark-grey px-6 py-4 text-base leading-normal font-semibold text-light-grey shadow-[0_0_32px_0_rgba(0,0,0,0.1)]"
    >
      {icon && <img src={icon} alt="" className="shrink-0" />}
      {message}
    </div>
  );
};

export default Toast;
