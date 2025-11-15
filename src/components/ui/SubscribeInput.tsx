import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SubscribeInput() {
  return (
    <Field>
      <InputGroup>
        <InputGroupInput
          className="py-5"
          type="email"
          placeholder="Your best email for subscribe"
        />
        <InputGroupAddon align="inline-end">
          <Button variant="ghost" aria-label="Subscribe" size="icon-xs">
            <ArrowRightIcon />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  );
}
