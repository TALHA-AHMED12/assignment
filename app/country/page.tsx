import Link from "next/link"; //missing one line
export default function Countries() {
  return (
    <div>
      {" "}
      <p>
        {" "}
        <strong>
          {" "}
          <em>List of the countries are given below:</em>{" "}
        </strong>{" "}
      </p>{" "}
      <ul className="list-disc pl-5">
        {" "}
        {/* Optional: Tailwind CSS for styling the list */}{" "}
        <li>
          {" "}
          <Link href="/country/pakistan">
            {" "}
            <strong>Pakistan</strong>{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href="/country/india">
            {" "}
            <strong>India</strong>{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href="/country/china">
            {" "}
            <strong>China</strong>{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href="/country/iran">
            {" "}
            <strong>Iran</strong>{" "}
          </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link href="/country/russia">
            {" "}
            <strong>Russia</strong>{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
}
