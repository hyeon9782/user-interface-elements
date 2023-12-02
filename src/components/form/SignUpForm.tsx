import { ChangeEvent, FormEvent, useState } from "react";
import FormControl from "./FormControl";
import InputWrapper from "./InputWrapper";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      alert("모든 필드를 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("회원가입 성공");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <InputWrapper
        id="username"
        value={formData.username}
        type="text"
        onChange={handleInputChange}
      >
        <InputWrapper.Label>Username</InputWrapper.Label>
        <InputWrapper.Input />
        <InputWrapper.Caption
          isVaild={false}
          text="이미 존재하는 유저네임이에요!"
        />
      </InputWrapper>
    </form>
  );
};

export default SignUpForm;

// 1. 제어 컴포넌트로 개발
// 2. 사용자가 입력을 하자마자 유효성 검사 진행
// 3. 조건에 따른 제출 버튼 (비)활성화 (유효성 감사가 모두 통과되면)
// 4. 웹 접근성을 고려하여 에러 메세지 작성
// 5.
