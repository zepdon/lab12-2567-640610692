export const Footer = (props: {
  year: string;
  fullName: string;
  studentId: string;
}) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        Copyright © {props.year} {props.fullName} {props.studentId}
      </p>
    </div>
  );
};
