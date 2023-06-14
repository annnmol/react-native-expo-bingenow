
interface AppFormProps {
  onSubmit?: (data: FormData) => void;
  methods: UseFormReturn<unknown, unknown>;
  style?: StyleProp<ViewStyle>
  children: React.ReactNode;
  [otherProps: string]: unknown;
}

interface TextFieldProps {
  name: string;
  control: Control<unknown>;
  label?: string;
  divStyle?: StyleProp<TextStyle>;
  onChangeCallbackFn?: (value: unknown) => void;
  [otherProps: string]: unknown;
}

interface SelectFieldProps extends TextFieldProps {
  options: unknown[];
}
interface RadioFieldProps extends TextFieldProps {
  options: unknown[];
  row?: boolean;
}

interface AppFormErrorProps {
  error: string | undefined;
  visible: boolean | undefined;
  divStyle?: StyleProp<TextStyle>;
}
interface AppFormLabelProps {
  label: string | undefined | null;
  divStyle?: StyleProp<TextStyle>;
}

interface FormButtonProps {
  style?: StyleProp<ViewStyle>;
  handleSubmit: (data: any) => void;
  children: React.ReactNode;
  [otherProps: string]: unknown;
}
