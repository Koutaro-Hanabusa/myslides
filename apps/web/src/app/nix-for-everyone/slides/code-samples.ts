export const COWSAY_DEV_SHELL_EXAMPLE = `devShells.\${system}.default =
  pkgs.mkShellNoCC {
    packages = [ pkgs.cowsay ];
  };`;
