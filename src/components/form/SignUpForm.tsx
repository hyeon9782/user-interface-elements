import { ChangeEvent, FormEvent, useState } from "react";
import InputWrapper from "./InputWrapper";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formValid, setFormValid] = useState({
    username: true,
    email: true,
    password: true,
  });

  const validateForm = (id: string, value: string) => {
    if (value === "") {
      return true;
    }
    let regex: RegExp;
    switch (id) {
      case "username":
        regex = /^[a-zA-Z]+$/;
        break;
      case "email":
        regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        break;
      case "password":
        regex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,}$/;
        break;
      default:
        regex = /^[a-zA-Z]+$/;
    }
    return regex.test(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setFormValid((prevVail) => ({
      ...prevVail,
      [id]: validateForm(id, value),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          isValid={formValid.username}
          text="유저 네임은 영문만 입력할 수 있어요."
        />
      </InputWrapper>
      <InputWrapper
        id="email"
        value={formData.email}
        type="email"
        onChange={handleInputChange}
      >
        <InputWrapper.Label>Email</InputWrapper.Label>
        <InputWrapper.Input />
        <InputWrapper.Caption
          isValid={formValid.email}
          text="이메일 형식에 맞지 않습니다."
        />
      </InputWrapper>

      <InputWrapper
        id="password"
        value={formData.password}
        type="password"
        onChange={handleInputChange}
      >
        <InputWrapper.Label>Password</InputWrapper.Label>
        <InputWrapper.Input />
        <InputWrapper.Caption
          isValid={formValid.password}
          text="비밀번호는 영문 대소문자, 숫자, 특수문자를 포함한 8자리 이상이어야 합니다."
        />
      </InputWrapper>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

// 1. 제어 컴포넌트로 개발
// 2. 사용자가 입력을 하자마자 유효성 검사 진행
// 3. 조건에 따른 제출 버튼 (비)활성화 (유효성 감사가 모두 통과되면)
// 4. 웹 접근성을 고려하여 에러 메세지 작성
// 5.
