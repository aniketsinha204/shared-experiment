import moment from "moment";
export const currentDateFunc = () => {
  return moment().format("MMMM Do YYYY, h:mm:ss a") + Math.random();
};
export const commonCurrentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
