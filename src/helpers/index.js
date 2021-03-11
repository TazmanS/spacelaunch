
let defaultOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const date = (date, options = defaultOptions) => {

  return new Date(date).toLocaleString("en-US", options)
  
}

// export const id = location => {
//   return location.pathname.split('/').slice(-1).join()
// }