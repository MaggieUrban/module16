import { SubmitHandler, useForm } from "react-hook-form";

type IFormInput = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  category: "";
  age: number;
  checkbox: [];
  password: "";
};

export const Form2 = () => {
  const registerOptions = {
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    // try {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts",
    //     {
    //       method: "post",
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   const new_data = await response.json();
    //   console.log(new_data);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        name
        <input {...register("firstName")} placeholder="name" />
        {errors.firstName?.type === "required" && <p>поле обязательное</p>}
      </label>
      <label>
        surname
        <input
          type="text"
          {...register("lastName", {
            minLength: {
              value: 5,
              message: "фамилия должна быть более 5 символов",
            },
          })}
          placeholder="surname"
        />
        {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
      </label>
      <label>
        email
        <input type="email" {...register("email")} placeholder="email" />
      </label>
      <label>
        address
        <input type="text" {...register("address")} placeholder="address" />
      </label>
      <label>
        Введите кол-во лет
        <input
          placeholder="age"
          type="number"
          defaultValue={20}
          {...register("age", {
            validate: (value) => value > 18 || "должно быть более 18 лет",
          })}
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          {...register("password", registerOptions.password)}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>
      </label>
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <label className="checkbox">
        Вариант 1
        <input {...register("checkbox")} type="checkbox" value="A" />
      </label>
      <label className="checkbox">
        Вариант 2
        <input {...register("checkbox")} type="checkbox" value="B" />
      </label>
      <label className="checkbox">
        Вариант 3
        <input {...register("checkbox")} type="checkbox" value="C" />
      </label>

      <input type="submit" />
    </form>
  );
};
