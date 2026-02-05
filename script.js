$(function() {
  // スクロール時の判定関数
  function showSection() {
    $(".content").each(function() {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      
      // 判定基準（150px）は変えずに維持
      if (scroll > target - windowHeight + 150) {
        $(this).addClass("is-show");
      }
    });
  }

  // 1. 通常のスクロール時に実行
  $(window).scroll(function() {
    showSection();
  });

  // 2. 読み込み時に一度実行
  showSection();

  // 3. 【重要】幕が上がったタイミング（2秒後）で再度強制実行
  // これにより、スクロールしなくても最初のセクションが表示されます
  setTimeout(function() {
    showSection();
  }, 2000); 
});