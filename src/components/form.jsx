import style from "./form.module.css"

function FormPage() {


    return (
        <div className={style.container}>
            <div className={style.card}>
                <p className={style.login}>Log in</p>
                <div className={style.inputBox}>
                    <input type="text" autoComplete='off' required="required"/>
                        <span className={style.user}>Username</span>
                </div>

                <div className={style.inputBox}>
                    <input type="password" autoComplete='off'  required="required"/>
                        <span className={style.user} >Password</span>
                </div>

                <button className={style.enter}>Enter</button>

            </div>
        </div>
    )
}

export default FormPage;
