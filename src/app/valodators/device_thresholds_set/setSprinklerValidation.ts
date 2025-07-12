// validation
import { z } from "zod";

// Zod Validation Schema for Club Profile Completion
const setSprinklerValidation = z.object({
  motor_on: z.any().optional(),
  motor_off: z.any().optional(),
});

export default setSprinklerValidation;
