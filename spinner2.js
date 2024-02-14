let spinAnim = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r\/   ', '\r\-   ', '\r\\   '];

for (let i = 0; i < spinAnim.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinAnim[i]);
  }, i * 200);
}