import {
  faPlusSquare,
  faListAlt,
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { importData } from '@react-monorepo/shared-data';
import { useToast } from '@react-monorepo/shared-ui';
import { useRef, useCallback, useState } from 'react';
import {
  Button,
  Divider,
  FileInput,
  Menu,
  Modal,
  Tooltip,
} from 'react-daisyui';

export function ProductNavMenu() {
  const [file, setFile] = useState<File | null>();
  const { Toast, showError, showSuccess } = useToast();

  const ref = useRef<HTMLDialogElement>(null);

  const showUploadModal = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const setImportFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return;
    }

    setFile(event.target.files[0]);
  };

  const doImport = async () => {
    if (!file) {
      return;
    }

    try {
      await importData(file);
      ref.current?.close();
      showSuccess('Products imported');
    } catch (error) {
      showError('Error updating product');
      console.error(error);
    }
  };

  return (
    <>
      <Menu className="menu-horizontal rounded mr-4 w-[233px]">
        <Menu.Item>
          <Tooltip message="Inventory table" position="bottom">
            <a href="/inventory-table">
              <FontAwesomeIcon
                color="oklch(var(--b1))"
                icon={faListAlt}
                size="lg"
              />
            </a>
          </Tooltip>
        </Menu.Item>

        <Menu.Item>
          <Tooltip message="Add product" position="bottom">
            <a href="/add-product">
              <FontAwesomeIcon
                color="oklch(var(--b1))"
                icon={faPlusSquare}
                size="lg"
              />
            </a>
          </Tooltip>
        </Menu.Item>

        <Menu.Item>
          <Tooltip message="Edit product" position="bottom">
            <a href="/edit-product">
              <FontAwesomeIcon
                color="oklch(var(--b1))"
                icon={faPenToSquare}
                size="lg"
              />
            </a>
          </Tooltip>
        </Menu.Item>

        <Divider className="m-0" horizontal />

        <Menu.Item onClick={showUploadModal}>
          <Tooltip message="Import inventory" position="bottom">
            <FontAwesomeIcon
              color="oklch(var(--b1))"
              icon={faFileImport}
              size="lg"
            />
          </Tooltip>
        </Menu.Item>
      </Menu>

      <Modal ref={ref}>
        <Modal.Header>Import inventory (json)</Modal.Header>

        <Modal.Body>
          <FileInput
            className="w-full max-w-xs"
            accept=".json"
            size="md"
            bordered
            onChange={setImportFile}
          />
        </Modal.Body>

        <Modal.Actions>
          <form className="flex gap-2" method="dialog">
            <Button>Cancel</Button>
          </form>

          <Button color="primary" onClick={doImport}>
            Import
          </Button>
        </Modal.Actions>
      </Modal>

      <Toast />
    </>
  );
}
