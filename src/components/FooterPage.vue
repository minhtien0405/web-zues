<template>
  <div class="footer">
    <a href="#"
      ><img
        class="header__logo"
        src="@/assets/images/Logo.png"
        alt="image logo"
    /></a>
    <nav class="footer__nav">
      <a class="footer__link" href="#">Terms & Conditions</a>
      <a class="footer__link" href="#">Privacy Policy</a>
      <a class="footer__link" href="#">Cookies</a>
      <a class="footer__link" href="#">Refunds</a>
      <a class="footer__link" href="#">License</a>
    </nav>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 18px;
  margin-bottom: 50px;
  .footer__nav {
    .footer__link {
      display: inline-block;
      text-decoration: none;
      padding: 12px;
      @include styleFont(600, 16px, #000, 24px);
      transition: all 0.1s;
      &:not(:last-child) {
        margin-right: 8px;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
// reponsive
@media (max-width: 768px) {
  .footer {
    display: block;
    text-align: center;
  }
}
@media (max-width: 576px) {
  .footer .footer__nav .footer__link {
    font-size: 20px;
  }
}
</style>
