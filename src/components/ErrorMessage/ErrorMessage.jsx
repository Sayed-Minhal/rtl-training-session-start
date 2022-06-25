function ErrorMessage({ message }) {
  return (
    <h3
      style={{
        backgroundColor: "#992080",
        color: "#ffffff",
        textAlign: "center",
        padding: "10px 30px",
      }}
    >
      {message}
    </h3>
  );
}

export default ErrorMessage;
