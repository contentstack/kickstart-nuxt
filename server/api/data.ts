export default defineEventHandler(() => {
    console.log('/api/data is being called!');
    return {
      timestamp: new Date().toISOString(),
    }
  })
  