export function getDate(timestamp: number) {
    if (timestamp) {
      return new Date(timestamp).toDateString()
    } 
      return ''
}