// make a Button.types.ts file in the same directory as Button.tsx and Button.test.tsx and Button.stories.tsx and Button.mdx and Button.css and Button.module.css and Button.scss and Button.sass and Button.less and Button.styl and Button.stylus
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   * @default false
   * @type {boolean}
   * @memberof ButtonProps
   * @description if true, the button will be primary
   * @example
   * <Button primary={true} />
   * <Button primary={false} />
   * <Button primary />
   */
  primary?: boolean;
  /**
   * What background color to use
   * @default 'white'
   * @type {string}
   * @memberof ButtonProps
   * @description background color of the button
   * @example
   * <Button backgroundColor="red" />
   * <Button backgroundColor="green" />
   * <Button backgroundColor="blue" />
   * <Button />
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   * @default 'medium'
   * @type {('small' | 'medium' | 'large')}
   * @memberof ButtonProps
   * @description size of the button
   * @example
   * <Button size="small" />
   * <Button size="medium" />
   * <Button size="large" />
   * <Button />
   * <Button size="small" label="Button" />
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * custom class name for the button
   * @type {string}
   * @memberof ButtonProps
   * @description custom class name for the button
   * @example
   * <Button className="custom-class" />
   * <Button className="custom-class-1 custom-class-2" />
   * <Button className={styles.customClass} />
   */
  className?: string;

  /**
   * disabled button
   * @default false
   * @type {boolean}
   * @memberof ButtonProps
   * @description if true, the button will be disabled
   * @example
   * <Button disabled={true} />
   * <Button disabled={false} />
   * <Button disabled />
   * <Button />
   */
  disabled?: boolean;

  /**
   * children of the button
   * @type {React.ReactNode}
   * @memberof ButtonProps
   * @description children of the button
   * @example
   *  <Button>
   *   <span>Button</span>
   * </Button>
   */
  children?: React.ReactNode;

  /**
   * onClick handler
   * @type {React.MouseEventHandler<HTMLButtonElement>}
   * @memberof ButtonProps
   * @description onClick handler for the button
   * @example
   * <Button onClick={() => console.log('clicked')} />
   * <Button onClick={handleClick} />
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * loading state
   * @default false
   * @type {boolean}
   * @memberof ButtonProps
   * @description if true, the button will be disabled and the label will be replaced with a loading indicator
   * @example
   * <Button loading={true} />
   * <Button loading={false} />
   * <Button loading />
   */
  loading?: boolean; // if true, the button will be disabled and the label will be replaced with a loading indicator (spinner) and onClick will be ignored (disabled)

  /**
   * icon to be displayed on the button
   * @type {React.ReactNode}
   * @memberof ButtonProps
   * @description icon to be displayed on the button
   * @example
   * <Button icon={<Icon />} />
   */
  icon?: React.ReactNode;
}
