import { render, fireEvent } from '@testing-library/react';
import App from './App';
import NowaForma from "./components/NowaForma"
import emailjs from 'emailjs-com';

test.skip("render kqr", () => {
  render(<NowaForma></NowaForma>)
  screen.debug();
})

// it("renders with or without a name", () => {
//   act(() => {
//     render(<NowaForma/>, container);
//   });
//   expect(container.textContent).toBe(null);

//   act(() => {
//     render(<NowaForma nameLabel="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Jenny");

//   act(() => {
//     render(<NowaForma nameLabel="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Margaret");
// });

// it("render Name inputs", () => {
//   const untils = render(<NowaForma />);
//   const input = untils.getByLabelText("Imię i nazwisko");
//   expect(input).toBeInTheDocument()

//   const input2 = untils.getByLabelText("Adres e-mail");
//   expect(input2).toBeInTheDocument()

//   const input3 = untils.getByLabelText("Wiadomość");
//   expect(input3).toBeInTheDocument()
// })


jest.mock("emailjs-com")

describe("renders form sumbit", () => {
  const nameInputValue = "Sebastian";
  const emailInputValue = "sp.szakuuq@qqutas.xd";
  const badEmailInputValue = "sp.szak"
  const messageInputValue = "costamcos";

  test("Poprawne wysyłanie maila", () => {
    const { getByLabelText, getByText } = render(<NowaForma />);

    emailjs.sendForm.mockResolvedValue({ text: "blackAfroamericanin" })
    fireEvent.change(getByLabelText("Imię i nazwisko"), { target: { value: nameInputValue } });
    fireEvent.change(getByLabelText("Adres e-mail *"), { target: { value: emailInputValue } });
    fireEvent.change(getByLabelText("Wiadomość"), { target: { value: messageInputValue } });
    fireEvent.click(getByText("Wyślij"));
    expect(emailjs.sendForm).toBeCalled();
  })

  test("Niepoprawne wysyłanie maila", () => {
    const { getByLabelText, getByText } = render(<NowaForma />);

    emailjs.sendForm.mockRejectedValue({ text: "costam1" })
    fireEvent.change(getByLabelText("Imię i nazwisko"), { target: { value: nameInputValue } });
    fireEvent.change(getByLabelText("Adres e-mail *"), { target: { value: badEmailInputValue } });
    fireEvent.change(getByLabelText("Wiadomość"), { target: { value: messageInputValue } });
    fireEvent.click(getByText("Wyślij"));
    expect(emailjs.sendForm).not.toBeCalled();
  })

})
