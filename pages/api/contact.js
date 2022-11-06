function handler(req, res) {
  if (req.method === 'POST') {
    const { email, message, name } = res.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !message ||
      !message.trim() === ''
    ) {
      res.status(422).jason({
        message: 'invald input',
      });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };
    console.log(newMessage);
    res.status(201).json({ message: newMessage, message: 'sent' });
  }
}
export default handler;
