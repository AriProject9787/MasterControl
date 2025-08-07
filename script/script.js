
  // Set expiry date & time (YYYY-MM-DDTHH:MM:SS in ISO format)
  const expiryDate = new Date("2026-04-10T23:59:59");

  // Check current time
  const now = new Date();

  // Compare
  if (now >= expiryDate) {
    alert("⚠️ This site has expired. Please contact the site owner for access.");
    document.body.innerHTML = "<div style='text-align:center;padding:50px;font-size:1.5rem;color:red;'>⚠️ This site has expired.<br>Please contact <a href='mailto:ariofficial9787@gmail.com' style='color:blue;'>ariofficial9787@gmail.com</a></div>";
  }


  AOS.init({ duration: 1000 });

  // Drawer toggle
  const menuBtn = document.getElementById('menu-btn');
  const drawer = document.getElementById('drawer');
  menuBtn.addEventListener('click', () => drawer.classList.toggle('open'));
  document.querySelectorAll('.drawer a').forEach(link => link.addEventListener('click', () => drawer.classList.remove('open')));

  // Mode toggle
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
  });

  // Barcode Skills Animation
  document.querySelectorAll('.barcode').forEach(barcode => {
    const level = barcode.getAttribute('data-level');
    for(let i=0; i<20; i++){
      const bar = document.createElement('div');
      barcode.appendChild(bar);
      if(i < (level/5)) bar.classList.add('active');
    }
  });
  var valid = new Date("2026-04-10T23:59:59");
  var today = new Date();
  if (today >= valid) {
    alert("⚠️ This site has expired. Please contact the site owner for access.");
    document.body.innerHTML = "<div style='text-align:center;padding:50px;font-size:1.5rem;color:red;'>⚠️ This site has expired.<br>Please contact <a href='mailto:ariofficial9787@gmail.com' style='color:blue;'>ariofficial9787@gmail.com</a></div>";
  }

  // Particle background
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  let particles = Array.from({length: 80}, () => ({
    x: Math.random()*canvas.width, y: Math.random()*canvas.height, r: Math.random()*2+1,
    dx: Math.random()-0.5, dy: Math.random()-0.5
  }));
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='#00f7ff';
      ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>canvas.width) p.dx*=-1;
      if(p.y<0||p.y>canvas.height) p.dy*=-1;
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize',()=>{canvas.width=innerWidth; canvas.height=innerHeight;});
