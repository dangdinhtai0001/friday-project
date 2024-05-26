# friday-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Commit message rule configuration

Details: https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md

1. **build**: Thay đổi liên quan đến quá trình build hoặc công cụ hỗ trợ build.
   Ví dụ: "Thay đổi cấu hình webpack để tối ưu hóa quá trình build."

2. **chore**: Các thay đổi không ảnh hưởng đến mã nguồn như việc cập nhật các file cấu hình hoặc cập nhật các dependency.
   Ví dụ: "Cập nhật phiên bản của eslint và stylelint."

3. **ci**: Các thay đổi liên quan đến Continuous Integration (CI) hoặc quy trình tự động hóa.
   Ví dụ: "Thêm bước kiểm tra code coverage vào quy trình CI."

4. **docs**: Các thay đổi liên quan đến tài liệu, bao gồm cả sửa đổi, thêm mới hoặc xóa bỏ tài liệu.
   Ví dụ: "Thêm hướng dẫn sử dụng cho API mới vào tài liệu."

5. **feat**: Thêm một tính năng mới vào mã nguồn.
   Ví dụ: "Thêm chức năng đăng nhập bằng Facebook."

6. **fix**: Sửa lỗi trong mã nguồn.
   Ví dụ: "Sửa lỗi không thể đăng nhập khi mật khẩu chứa ký tự đặc biệt."

7. **perf**: Cải thiện hiệu suất của mã nguồn.
   Ví dụ: "Tối ưu hóa thuật toán tìm kiếm để giảm thời gian phản hồi."

8. **refactor**: Thay đổi mã nguồn mà không thêm tính năng mới hoặc sửa lỗi.
   Ví dụ: "Tái cấu trúc phương thức tính toán giá trị trung bình."

9. **revert**: Hoàn tác một commit trước đó.
   Ví dụ: "Hoàn tác commit có ID là `abc123` do gây ra lỗi không mong muốn."

10. **style**: Các thay đổi liên quan đến định dạng, định kiểu hoặc chuẩn hóa mã nguồn, không ảnh hưởng đến logic hoạt động.
    Ví dụ: "Chỉnh sửa lề và thụt lề trong mã nguồn để tuân thủ quy tắc coding style."

11. **test**: Thêm hoặc sửa đổi các test.
    Ví dụ: "Thêm test cho chức năng xác thực người dùng."
