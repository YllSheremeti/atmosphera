'use strict';

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

/**
 * @param {number} dateUnix - Unix date in seconds
 * @param {number} timezone - Timezone shift from UTC
 * @returns {string} Date String, ex.: "Sunday 10, Jan"
 */

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * @param {number} timeUnix - Unix date in seconds
 * @param {number} timezone - Timezone shift from UTC
 * @returns {string} Time String, ex.: "HH:MM AM/PM"
 */

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix - Unix date in seconds
 * @param {number} timezone - Timezone shift from UTC
 * @returns {string} Time String, ex.: "HH AM/PM"
 */

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}

export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Good",
    message: "Air quality is satisfactory; air pollution poses little or no risk." 
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable. Sensitive individuals may experience slight health effects for certain pollutants."
  },
  3: {
    level: "Moderate",
    message: "Sensitive health groups may experience health effects, the general public is less likely to be affected."
  },
  4: {
    level: "Poor",
    message: "Health effects may impact everyone, sensitive health groups may be more seriously affected"
  },
  5: {
    level: "Very Poor",
    message: "Emergency health warnings, the entire population may be seriously affected"
  }
}