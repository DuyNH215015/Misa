// validate.js
export function validateCandidate(data) {
  const errors = {};
  // 1. Họ và tên (bắt buộc)
  if (!data.fullName || data.fullName.trim() === "") {
    errors.fullName = "Họ và tên không được để trống";
  }
  // 2. Ngày sinh (nếu có thì phải đúng date)
  if (data.birthday && isNaN(Date.parse(data.birthday))) {
    errors.birthday = "Ngày sinh không hợp lệ";
  }
  // 3. Email (nếu có)
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Email không đúng định dạng";
    }
  }
  // 4. Số điện thoại (nếu có)
  if (data.phone) {
    const phoneRegex = /^[0-9]{9,11}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = "Số điện thoại không hợp lệ";
    }
  }
  // 5. Ngày ứng tuyển (bắt buộc)
  if (!data.applyDate) {
    errors.applyDate = "Ngày ứng tuyển không được để trống";
  } else if (isNaN(Date.parse(data.applyDate))) {
    errors.applyDate = "Ngày ứng tuyển không hợp lệ";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
