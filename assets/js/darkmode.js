const userPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
const currentTheme = 'dark'
const syntaxTheme = document.querySelector("#theme-link");


{{ $darkSyntax := resources.Get "styles/_dark_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}
{{ $lightSyntax := resources.Get "styles/_light_syntax.scss" | resources.ToCSS (dict "outputStyle" "compressed") | resources.Fingerprint "md5" | resources.Minify  }}

if (currentTheme) {
  document.documentElement.setAttribute('saved-theme', currentTheme);
  syntaxTheme.href = currentTheme === 'dark' ?  '{{ $darkSyntax.Permalink }}' :  '{{ $lightSyntax.Permalink }}';
}

document.documentElement.setAttribute('saved-theme', 'dark');
localStorage.setItem('theme', 'dark');
syntaxTheme.href = '{{ $darkSyntax.Permalink }}';

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('saved-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    syntaxTheme.href = '{{ $darkSyntax.Permalink }}';
  }
  
  else {
    if (confirm("Just so you are aware, you are trying to switch from dark mode to light mode. Are you sure?") && confirm("Light mode is very bad for your health! Your eyes are going to degrade over time much faster! Are you still sure?") && confirm("Think about your eyes. You won't be able to see your children when you grow up. Are you really sure?") && confirm("Are you someone who works late at night? Well guess what. It affects you worse! Are you absolutely sure?") && confirm("Sources (https://www.allaboutvision.com/digital-eye-strain/is-dark-mode-better-for-eyes/) says that 'dark mode has a lot of benefits', 'it's easier on the eyes than a stark, bright white screen'. Are you certainly sure?") && confirm("You may be getting a little annoyed with all these alerts. I still have to ask. Are you most definitely sure?") && confirm("I'm only doing it for your own good. And for the good of your eyes. Are. You. Sure.") && confirm("Studies (me) show that wearing glasses makes you look 10000000000 times less attractive. Example? Fred! Are you sure you want to be Fred?") && confirm("In summary, think about your eyes and your appearance. Don't sacrifice those things for silly light mode! Are you not gonna reconsider?")){
      if (confirm("Don't be a monster! Save your eyes, remain in dark mode!")) {
        document.documentElement.setAttribute('saved-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        syntaxTheme.href = '{{ $darkSyntax.Permalink }}';
        document.getElementById("darkmode-toggle").checked = true;
      } 
      else {
        alert("Fine. You asked for this!")
        document.documentElement.setAttribute('saved-theme', 'light')
        localStorage.setItem('theme', 'light')
        syntaxTheme.href = '{{ $lightSyntax.Permalink }}';
      }
    }
    else {
      document.documentElement.setAttribute('saved-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      syntaxTheme.href = '{{ $darkSyntax.Permalink }}';
      document.getElementById("darkmode-toggle").checked = true;
    }  


  }
}


window.addEventListener('DOMContentLoaded', () => {
  // Darkmode toggle
  const toggleSwitch = document.querySelector('#darkmode-toggle')

  // listen for toggle
  toggleSwitch.addEventListener('change', switchTheme, false, {passive: true})

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true
  }
  else {
    toggleSwitch.checked = false
  }
}, {passive: true})