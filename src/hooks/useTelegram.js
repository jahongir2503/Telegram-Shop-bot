const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisibler){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show()
        }
    }
    return {
        tg,
        user: tg.iniDataUnsafe?.user,
    }
}

