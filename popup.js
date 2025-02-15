function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliSeconds = String(now.getMilliseconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
  }
  
  // به‌روزرسانی زمان هر ثانیه
  setInterval(updateTime, 100);
  
  // نمایش زمان بلافاصله پس از بارگذاری
  updateTime();