import { ChangeEvent, FormEvent, useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="유저네임을 입력해주세요."
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={formData.password}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SignUpForm;

// 1. 유효성 체크
// 2. 유효성에 체크되지
