export const fetchAPI = (date) => {
    console.log("fetchAPI called with date:", date);
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  };

  export const submitAPI = (formData) => {
    console.log("Submitted booking data:", formData);
    return true;
  };


