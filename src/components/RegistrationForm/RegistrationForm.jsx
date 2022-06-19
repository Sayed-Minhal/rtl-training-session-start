import { useState } from "react";

function RegistrationForm({ onSubmitHandler }) {
    const [firstName, setFirstName] = useState('');
    const [teamRole, setTeamRole] = useState('');
  return (
    <form
      name="registrationForm"
      data-testid="registrationForm"
      onSubmit={(e) => {
        e.preventDefault(); 
        onSubmitHandler({firstName, teamRole})}}
    >
      <label htmlFor="firstName">First Name
      </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          placeholder="Enter your first name"
          onChange={(e)=>setFirstName(e.target.value)}
        />
      <label htmlFor="teamRoleDeveloper">Developer
        <input
          type="radio"
          name="teamRole"
          id="teamRoleDeveloper"
          checked={teamRole === "developer"}
          value='developer'
          placeholder="Select if you are a developer"
          onChange={()=>setTeamRole('developer')}
        />
      </label><br/>
      <label htmlFor="teamRoleTester">Tester
        <input
          type="radio"
          name="teamRole"
          id="teamRoleTester"
          checked={teamRole === "tester"}
          value='tester'
          placeholder="Select if you are a tester"
          onChange={()=>setTeamRole('tester')}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
