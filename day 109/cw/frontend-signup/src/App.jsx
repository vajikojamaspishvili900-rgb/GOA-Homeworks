import { useState } from "react";
import "./App.css";

function App() {
  // ველების value-ები
  const [callsign, setCallsign] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);

  // პაროლის გამოჩენა / დამალვა
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // შეცდომის ტექსტები
  const [callsignError, setCallsignError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [termsError, setTermsError] = useState("");

  // წარმატებით დარეგისტრირდა თუ არა
  const [success, setSuccess] = useState(false);

  // არის თუ არა პაროლში ციფრი
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true;
    }
  }

  // არის თუ არა პაროლში დიდი ასო
  const hasUpper = password !== password.toLowerCase();

  // პაროლის სიძლიერე (0-დან 4-მდე)
  let strength = 0;
  if (password.length >= 8) strength++;
  if (hasUpper) strength++;
  if (hasNumber) strength++;
  if (password.length >= 12) strength++;

  const levels = ["", "weak", "fair", "good", "strong"];
  const labels = ["At least 8 characters", "Weak", "Fair", "Good", "Strong"];

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    // Callsign
    if (callsign.length < 3 || callsign.length > 20) {
      setCallsignError("Callsign must be 3-20 characters");
      valid = false;
    } else {
      setCallsignError("");
    }

    // Email
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    // Confirm password
    if (confirm === "" || confirm !== password) {
      setConfirmError("Passwords do not match");
      valid = false;
    } else {
      setConfirmError("");
    }

    // Terms
    if (!terms) {
      setTermsError("You must accept the terms");
      valid = false;
    } else {
      setTermsError("");
    }

    if (valid) {
      setSuccess(true);
    }
  }

  return (
    <main className="page">
      <div className="layout">
        {/* ---------- მარცხენა ნაწილი ---------- */}
        <section className="intro">
          <img className="logo" src="/images/logo.svg" alt="Neoncore" />

          <h1 className="title">
            <span className="title__slash">//</span>Join the Nexus
          </h1>
          <p className="subtitle">Initialize your Neoncore identity</p>

          <div className="status">
            <div className="status__top">
              <span>Operator ID</span>
              <span>0/5 Ready</span>
            </div>
            <p className={callsign ? "status__name" : "status__name status__name--empty"}>
              {callsign || "Epstein's soul"}
            </p>

            <ul className="status__list">
              <li>
                <span>Callsign</span>
                <i></i>
                <span>Pending</span>
              </li>
              <li>
                <span>Email</span>
                <i></i>
                <span>Pending</span>
              </li>
              <li>
                <span>Password</span>
                <i></i>
                <span>Pending</span>
              </li>
              <li>
                <span>Confirm</span>
                <i></i>
                <span>Pending</span>
              </li>
              <li>
                <span>Terms</span>
                <i></i>
                <span>Required</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="card">
          <span className="corner corner--top"></span>
          <span className="corner corner--bottom"></span>

          {success ? (
            <div className="success">
              <img className="success__icon" src="/images/icon-hex-check.svg" alt="" />
              <h2>Account initialized</h2>
              <p>
                Welcome to the Nexus, <b>{callsign}</b>.
              </p>
              <button type="button" className="btn" onClick={() => window.location.reload()}>
                Back to form
              </button>
            </div>
          ) : (
            <>
              <header className="card__top">
                <span>New Operator</span>
                <span className="card__note">All fields required</span>
              </header>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div className={callsignError ? "field field--error" : "field"}>
                  <label htmlFor="callsign">
                    <span>&gt;</span> Callsign
                  </label>
                  <input
                    id="callsign"
                    type="text"
                    placeholder="Epstein's soul"
                    value={callsign}
                    onChange={(e) => setCallsign(e.target.value)}
                  />
                  <p className="hint">3-20 characters: letters, numbers, _ or -</p>
                  <p className="error">{callsignError}</p>
                </div>

                <div className={emailError ? "field field--error" : "field"}>
                  <label htmlFor="email">
                    <span>&gt;</span> Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="error">{emailError}</p>
                </div>

                
                <div className={passwordError ? "field field--error" : "field"}>
                  <label htmlFor="password">
                    <span>&gt;</span> Password
                  </label>
                  <div className="input-group">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={showPassword ? "/images/icon-eye-off.svg" : "/images/icon-eye.svg"}
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="meter">
                    <span className={strength >= 1 ? "bar bar--" + levels[strength] : "bar"}></span>
                    <span className={strength >= 2 ? "bar bar--" + levels[strength] : "bar"}></span>
                    <span className={strength >= 3 ? "bar bar--" + levels[strength] : "bar"}></span>
                    <span className={strength >= 4 ? "bar bar--" + levels[strength] : "bar"}></span>
                  </div>
                  <p className="hint">{labels[strength]}</p>
                  <p className="error">{passwordError}</p>
                </div>

                <div className={confirmError ? "field field--error" : "field"}>
                  <label htmlFor="confirm">
                    <span>&gt;</span> Confirm password
                  </label>
                  <div className="input-group">
                    <input
                      id="confirm"
                      type={showConfirm ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                    />
                    <button
                      type="button"
                      className="toggle"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      <img
                        src={showConfirm ? "/images/icon-eye-off.svg" : "/images/icon-eye.svg"}
                        alt=""
                      />
                    </button>
                  </div>
                  <p className="error">{confirmError}</p>
                </div>

                <div className="terms">
                  <div className="check">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">
                      I accept the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                    </label>
                  </div>
                  <p className="error">{termsError}</p>
                </div>

                <button type="submit" className="btn">
                  Initialize account
                </button>
              </form>

              <p className="login">
                Already an operator? <a href="#">Log in</a>
              </p>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
