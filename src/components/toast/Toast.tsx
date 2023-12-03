// 사용자가 수행한 액션에 대한 피드백을 줄 때 사용
// 예) 자산을 모두 연결했어요.

import { useEffect, useState } from "react";

type ToastProps = {
  title?: string;
  duration?: number;
};
const Toast = ({ title, duration = 5000 }: ToastProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return visible ? (
    <div className="bg-green-400 opacity-50 rounded-md py-[10px] px-[20px] fixed top-10 left-[50%] translate-x-[-50%]">
      {title}
    </div>
  ) : null;
};

export default Toast;

// 1. Toast 컴포넌트를 구현해주세요.
// 2. Toast 컴포넌트의 위치, 제목, 설명을 개발자가 변경할 수 있게해주세요.
// 위치는 top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
// 3. 개발자가 원하는 컴포넌트를 띄울 수 있도록 해줘야한다.
// 4. Toast 컴포넌트가 이미 있다면 해당 컴포넌트 위 또는 아래에 다음 컴포넌트를 렌더링 해야한다.
