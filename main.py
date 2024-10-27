import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton

bot = telebot.TeleBot("7785841966:AAFglpdknHEXMM221ST-Cq1As_U7Gxc_Lpo")

@bot.message_handler(commands=["start"])
def send_welcome(message):
    # Path to the image on your local system
    image_path = "./protect-scam.png"  # Replace with your local file path

    # Send the local image file
    with open(image_path, 'rb') as image_file:
        bot.send_photo(message.chat.id, photo=image_file, caption="Welcome to the Mini App!")


    keyboard = InlineKeyboardMarkup()
    button = InlineKeyboardButton("Open Mini App", url="https://t.me/TgMiniReportAppBot/tgreportminiapp?start=launch")
    keyboard.add(button)
    bot.send_message(message.chat.id, "Click to launch the app:", reply_markup=keyboard)

bot.polling()
