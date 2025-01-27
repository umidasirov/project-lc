import Button from "../other/Button";

export default function Login() {
  return (
    <div class="login-container container-all" data-aos="fade-up" data-aos-duration="30000">
        <div className="login-item">
            <div className="form">
                <h1>Kirish</h1>
                <form action="">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Telefon raqamingiz</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Tasdiqlash kodi</label>
                    </div>
                    <Button title="Yuborish"/>
                </form>
            </div>
            <div className="banner">
                <h2>MyRoboga kirish</h2>
                <p>Tasdiqlash kodini olish uchun kiring:</p>
                <a href="https://t.me/robologinbot">@robologinbot</a>
            </div>
        </div>
    </div>)
}
