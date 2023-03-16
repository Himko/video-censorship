
export const makeCorrectTime = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
	const seconds: string = ((millis % 60000) / 1000).toFixed(3);
  return  (Number(minutes) < 10 ? '0' : '') + minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds.replace('.', ':');
}

